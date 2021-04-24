/*
京东种豆得豆互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写东东萌宠的好友码。
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let PlantBeanShareCodes = [
  '2f978fdf28f14ee29175efe6d3de56f2@103ce50b51554ad3a89723e9b0a56718@9eded28593704f59ad3996ca304ea2a1@edb27088e7e9468dbcc77c472a47fe98@c93ecd02f967498cb7047e6be84ea189@f38afad38a144140be1fce2f695749d9@291869e9d2944169bbe9c255d5538aee',
  'cc2dc09626d14b9d8a8e4c5e2f052447@9eded28593704f59ad3996ca304ea2a1@f38afad38a144140be1fce2f695749d9@edb27088e7e9468dbcc77c472a47fe98@103ce50b51554ad3a89723e9b0a56718@c93ecd02f967498cb7047e6be84ea189@291869e9d2944169bbe9c255d5538aee',
  '9eded28593704f59ad3996ca304ea2a1@c93ecd02f967498cb7047e6be84ea189@f38afad38a144140be1fce2f695749d9@291869e9d2944169bbe9c255d5538aee@cc2dc09626d14b9d8a8e4c5e2f052447@2f978fdf28f14ee29175efe6d3de56f2@edb27088e7e9468dbcc77c472a47fe98',
  'c93ecd02f967498cb7047e6be84ea189@f38afad38a144140be1fce2f695749d9@291869e9d2944169bbe9c255d5538aee@edb27088e7e9468dbcc77c472a47fe98@cc2dc09626d14b9d8a8e4c5e2f052447@2f978fdf28f14ee29175efe6d3de56f2@103ce50b51554ad3a89723e9b0a56718',
  'cc2dc09626d14b9d8a8e4c5e2f052447@2f978fdf28f14ee29175efe6d3de56f2@103ce50b51554ad3a89723e9b0a56718@9eded28593704f59ad3996ca304ea2a1@f38afad38a144140be1fce2f695749d9@291869e9d2944169bbe9c255d5538aee@edb27088e7e9468dbcc77c472a47fe98',
  '2f978fdf28f14ee29175efe6d3de56f2@103ce50b51554ad3a89723e9b0a56718@c93ecd02f967498cb7047e6be84ea189@291869e9d2944169bbe9c255d5538aee@cc2dc09626d14b9d8a8e4c5e2f052447@9eded28593704f59ad3996ca304ea2a1@edb27088e7e9468dbcc77c472a47fe98',
  'cc2dc09626d14b9d8a8e4c5e2f052447@2f978fdf28f14ee29175efe6d3de56f2@c93ecd02f967498cb7047e6be84ea189@edb27088e7e9468dbcc77c472a47fe98@103ce50b51554ad3a89723e9b0a56718@9eded28593704f59ad3996ca304ea2a1@f38afad38a144140be1fce2f695749d9',
  '2f978fdf28f14ee29175efe6d3de56f2@9eded28593704f59ad3996ca304ea2a1@f38afad38a144140be1fce2f695749d9@291869e9d2944169bbe9c255d5538aee@103ce50b51554ad3a89723e9b0a56718@9eded28593704f59ad3996ca304ea2a1@c93ecd02f967498cb7047e6be84ea189'
]
// 判断github action里面是否有种豆得豆互助码
if (process.env.PLANT_BEAN_SHARECODES) {
  if (process.env.PLANT_BEAN_SHARECODES.indexOf('&') > -1) {
    console.log(`您的种豆互助码选择的是用&隔开\n`)
    PlantBeanShareCodes = process.env.PLANT_BEAN_SHARECODES.split('&');
  } else if (process.env.PLANT_BEAN_SHARECODES.indexOf('\n') > -1) {
    console.log(`您的种豆互助码选择的是用换行隔开\n`)
    PlantBeanShareCodes = process.env.PLANT_BEAN_SHARECODES.split('\n');
  } else {
    PlantBeanShareCodes = process.env.PLANT_BEAN_SHARECODES.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < PlantBeanShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['PlantBeanShareCodes' + index] = PlantBeanShareCodes[i];
}
