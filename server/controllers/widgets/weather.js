const Weather = require('../../models/widgets/weather');
const Forecast = require('../../interfaces/forecast').Forecast;
const cityConfig = require('../../storage/city.list.json');
const axios = require('axios');

function getWeather(cityInput, unit, details)
{
    const city = cityConfig.find(city => {
        return city.name == cityInput;
    });
    let forecast = [];
    let dayDate;
    let days = [];
    let weatherCondition = {};
    var options = [
        { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
        { weekday: 'long', month: 'long', day: 'numeric' }
    ];
    const promise = new Promise((resolve, reject) => {
        axios.get('https://api.openweathermap.org/data/2.5/onecall', {
            params: {
                appid: '279e2d2d6320fc432f718b1f2c4a3a87',
                lat: city.coord.lat,
                lon: city.coord.lon,
                exclude: 'minutely,hourly',
                units: unit == 'celsius' ? 'metric' : 'imperial'
            }
        }).then(response => {
            days = response.data.daily;
            for (let i = 1; i < days.length - 2; i++) {
                dayDate = new Date(days[i].dt * 1000);
                dayDate = dayDate.toLocaleDateString("en-US", options[1]);
                weatherCondition = {
                    condition: days[i].weather[0].description,
                    icon: `http://openweathermap.org/img/wn/${days[i].weather[0].icon}@2x.png`
                };
                forecast.push(new Forecast(dayDate, weatherCondition, Math.round(days[i].temp.max * 100 / 100), Math.round(days[i].temp.min * 100 / 100)));
            }
            resolve({
                city: cityInput,
                date: new Date(response.data.current.dt * 1000).toLocaleDateString("en-US", options[0]),
                temperature: Math.round(response.data.current.temp * 100 / 100),
                condition: {
                    condition: response.data.current.weather[0].description,
                    icon: `http://openweathermap.org/img/wn/${response.data.current.weather[0].icon}@2x.png`
                },
                wind: details ? response.data.current.wind_speed : null,
                humidity: details ? response.data.current.humidity : null,
                pressure: details ? response.data.current.pressure : null,
                forecast: details ? forecast : null
            });
        }).catch(
            error => {
                reject(error);
                // res.status(400).json({
                //     error: error
                // });
            }
        )
    });

    return promise;
}

exports.createWidget = (req, res, next) => {
    let weather;

    getWeather(req.body.city, req.body.unit, req.body.details).then(
        weather => {
            weather = new Weather({
                city: weather.city,
                date: weather.date,
                temperature: weather.temperature,
                condition: weather.condition,
                wind: weather.wind,
                humidity: weather.humidity,
                pressure: weather.pressure,
                forecast: weather.forecast
            });
            weather.save().then(
                () => {
                    res.status(201).json({
                        message: 'Weather Widget Saved Successfully !'
                    });
                }
            ).catch(
                (error) => {
                    res.status(400).json({
                        error: error
                    });
                }
            );
        }
    ).catch(
        error => {
            res.status(400).json({
                error: error
            });
        }
    );
}

exports.deleteWidget = (req, res, next) => {
    Weather.deleteOne({_id: req.params.id}).then(
        () => {
            res.status(200).json({ message: 'Weather Widget Deleted !'});
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}

exports.getWidget = (req, res, next) => {
    // Thing.findOne({
    //     _id: req.params.id
    // }).then(
    //     (thing) => {
    //         res.status(200).json(thing);
    //     }
    // ).catch(
    //     (error) => {
    //         res.status(404).json({
    //             error: error
    //         });
    //     }
    // );
}

exports.modifyWidget = (req, res, next) => {
    // const thing = new Thing({
    //     _id: req.params.id,
    //     title: req.body.title,
    //     description: req.body.description,
    //     imageUrl: req.body.imageUrl,
    //     price: req.body.price,
    //     userId: req.body.userId
    // });
    //
    // Thing.updateOne({_id: req.params.id}, thing).then(
    //     () => {
    //         res.status(201).json({
    //             message: 'Thing updated successfully !'
    //         });
    //     }
    // ).catch(
    //     (error) => {
    //         res.status(400).json({
    //             error: error
    //         });
    //     }
    // );
}

exports.getWidgets = (req, res, next) => {
    Weather.find().then(
        (weatherWidgets) => {
            res.status(200).json(weatherWidgets);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}
