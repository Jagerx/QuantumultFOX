> ScriptName        Flighty
> Author            PTK@Kienphan2702
> UpdateTime        2024-08-01
> LinkTo            https://raw.githubusercontent.com/kienphan2702/Quantumult-X/5d9e122866d30f941a10bccfe3136bbef0d0c95f/crack_app/config.conf

[rewrite_local]

# ～ Flighty@Kienphan2702
^https:\/\/api\.flightyapp\.com\/v1\/sync\/user\?token=(.*)$ url script-response-body https://skytiming.site/Profiles/Scripts/flighty/flighty.js

[mitm]

hostname = api.flightyapp.com
