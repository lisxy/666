/*
 *
 *
脚本功能：墨摘-金句摘抄阅读 永久会员
软件版本：1.2.7
下载地址：
脚本作者：
更新时间：2025年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# >墨摘-金句摘抄阅读 永久会员
^https?:\/\/api.juzikong.com\/mobi\/mooz\/am\/me\/meInfo url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/mozhai.js
^https?:\/\/api.juzikong.com\/mobi\/mooz\/am\/(explore\/getTagCateConfig|music\/getBgmList) url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/mozhaitk.js

[mitm]
hostname = api.juzikong.com

*
*
*/






body = $response.body.replace(/.+/, "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")
$done({body});
