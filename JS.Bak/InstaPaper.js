[rewrite_local]
^https:\/\/www\.instapaper\.com\/api\/subscription_status url script-response-body https://raw.githubusercontent.com/saymiss/QxJs/master/Scripts/Instapaper.js

[mitm]
hostname = www.instapaper.com
