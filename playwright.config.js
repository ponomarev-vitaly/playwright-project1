const {PlaywrightTestConfig, devices} = require ('@playwright/test');
const MyReporter = require('./reporter');

const config = {
    retries: 1,
    timeout: 60000,
    reporter: './reporter.js',
    use: {
        baseURL: "https://the-internet.herokuapp.com/",
        headless: true,
        viewport: {width: 1280, height: 720},
        video: "on",
        screenshot: "on"

    },

    projects: [
        {
            name: 'Chrome',
            use: {browserName: 'chromium'}
        },
        {
            name: 'Firefox',
            use: {browserName: 'firefox'}
        },
        {
            name: 'Webkit',
            use: {browserName: 'webkit'}
        },
        {
            name: 'iPhone 12',
            use: {
                browserName: 'webkit', // Safari engine used for iPhone
                ...devices['iPhone 12'] // Emulate iPhone 12
            }
        },
        {
            name: 'Pixel 5',
            use: {
                browserName: 'webkit', // Safari engine used for iPhone
                ...devices['iPhone 12'] // Emulate iPhone 12
            }
        },
        {
            name: 'Galaxy Note 9',
            use: {
                browserName: 'webkit', // Safari engine used for iPhone
                ...devices['iPhone 12'] // Emulate iPhone 12
            }
        }

    ]
}

module.exports = config;