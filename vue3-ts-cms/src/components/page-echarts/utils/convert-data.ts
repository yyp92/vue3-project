import { coordinateData } from './coordinate-data'

/**
 * 根据 name 转换为经纬度
 */
export function convertData(data: any) {
    const res = []

    for (let i = 0; i < data.length; i++) {
        const geoCoord = coordinateData[data[i].name]

        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            })
        }
    }

    return res
}
