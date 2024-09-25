export const BASE_URL = 'https://citaitvsitval.com/ajax/ajaxmodules.php?'
export const MONTH_DATA = 'module=serviceMonthData'
export const INSTANT_CODE = 'njemrjvh9yty9ti5q07vsn04mt7mabqf';
export const ONDARA = "Ondara"
export const TORREVIEJA = "Torrevieja"

export const LOCALIDADES = {
    "Ondara" : {
        'localidad' : 'Ondara',
        'service' : '84',
        'store' : '9'
    },
    "Torrevieja" : {
        'localidad' : 'Torrevieja',
        'service' : '148',
        'store' : '10'
    }
}

export const URL_CURL = `
curl --request POST --url 'https://citaitvsitval.com/ajax/ajaxmodules.php?module=serviceMonthData' --header 'Content-Type: multipart/form-data' --header 'User-Agent: insomnia/9.3.3' --form service=148 --form firstCall=false --form instantCode=9p2i2r51xrjb2ntsi773gvcmpv4sh8hp --form date=2024-09-01 --form store=10
`