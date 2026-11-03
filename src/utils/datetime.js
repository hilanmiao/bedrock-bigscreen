import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')

export const formatClock = value => dayjs(value).format('YYYY-MM-DD HH:mm:ss ddd')
