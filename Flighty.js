> ScriptName        Flighty
> Author            @Kienphan2702
> UpdateTime        2024-08-01

[rewrite_local]

# ～ Flighty@Kienphan2702
^https:\/\/api\.flightyapp\.com\/v1\/sync\/user\?token=(.*)$ url script-response-body https://skytiming.site/Profiles/Scripts/flighty/flighty.js

[mitm]

hostname = api.flightyapp.com
