import fs from 'fs'
import path from 'path'

const root = process.cwd()
const componentDir = path.join(root, 'src/assets/styles/components')
const files = fs.readdirSync(componentDir)
  .filter(name => name.endsWith('.scss'))
  .map(name => path.join(componentDir, name))
files.push(path.join(root, 'src/assets/styles/readability.scss'))
files.push(path.join(root, 'src/assets/styles/docs.scss'))
files.push(path.join(root, 'src/views/home.scss'))
files.push(path.join(root, 'src/views/screens/energy/index.vue'))
files.push(path.join(root, 'src/views/screens/general/index.vue'))

const errors = []
const warnings = []
const pattern = /font-size\s*:\s*([0-9.]+)px/g

function scan(file) {
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/)
  lines.forEach((line, index) => {
    pattern.lastIndex = 0
    let match
    while ((match = pattern.exec(line))) {
      const value = Number(match[1])
      const location = `${path.relative(root, file)}:${index + 1}`
      if (value === 0) continue
      if (line.includes('.el-icon') || line.includes('bd-font-exempt')) continue
      if (value < 12) {
        errors.push(`${location}  font-size: ${value}px（低于 12px 下限）`)
      } else {
        warnings.push(`${location}  font-size: ${value}px（请改用 --bedrock-fs-*）`)
      }
    }
  })
}

files.forEach(scan)

if (warnings.length) {
  console.warn('字号提醒：')
  warnings.forEach(item => console.warn('  ' + item))
}
if (errors.length) {
  console.error('字号检查失败：')
  errors.forEach(item => console.error('  ' + item))
  process.exitCode = 1
} else {
  console.log(`字号检查通过：${files.length} 个文件，无低于 12px 的裸字号。`)
}
