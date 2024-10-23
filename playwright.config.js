const {PlaywrightTestConfig, devices} = require ('@playwright/test');
const MyReporter = require('./reporter');

const config = {
    retries: 1,
    timeout: 60000,
    reporter: './reporter.js',
    use: {
        headless: true,
        viewport: {width: 1280, height: 720},
        video: "on",
        screenshot: "on"
    },

    projects: [
        {
            name: 'Chrome-herokuapp',
            use: {browserName: 'chromium'},
            baseURL: 'https://the-internet.herokuapp.com/',
        },
        {
            name: 'Firefox-herokuapp',
            use: {browserName: 'firefox'},
            baseURL: 'https://the-internet.herokuapp.com/',
        },
        {
            name: 'Webkit-herokuapp',
            use: {browserName: 'webkit'},
            baseURL: 'https://the-internet.herokuapp.com/',
        },
        {
            name: 'iPhone 12-herokuapp',
            use: {
                browserName: 'webkit', // Safari engine used for iPhone
                baseURL: 'https://the-internet.herokuapp.com/',
                ...devices['iPhone 12'] // Emulate iPhone 12
            }
        },
        {
            name: 'Pixel 5-herokuapp',
            use: {
                browserName: 'webkit', // Safari engine used for iPhone
                baseURL: 'https://the-internet.herokuapp.com/',
                ...devices['iPhone 12'] // Emulate iPhone 12
            }
        },
        {
            name: 'Galaxy Note 9-herokuapp',
            use: {
                browserName: 'webkit', // Safari engine used for iPhone
                baseURL: 'https://the-internet.herokuapp.com/',
                ...devices['iPhone 12'] // Emulate iPhone 12
            }
        },
        
        {
            name: 'Chrome-demoqa',
            use: {browserName: 'chromium'},
            baseURL: 'https://demoqa.com/'
        },
        {
            name: 'Firefox-demoqa',
            use: {browserName: 'firefox'},
            baseURL: 'https://demoqa.com/'
        },
        {
            name: 'Webkit-demoqa',
            use: {browserName: 'webkit'},
            baseURL: 'https://demoqa.com/'
        },
        {
            name: 'iPhone 12-demoqa',
            use: {
                browserName: 'webkit', // Safari engine used for iPhone
                baseURL: 'https://demoqa.com/',
                ...devices['iPhone 12'] // Emulate iPhone 12
            }
        },
        {
            name: 'Pixel 5-demoqa',
            use: {
                browserName: 'webkit', // Safari engine used for iPhone
                baseURL: 'https://demoqa.com/',
                ...devices['iPhone 12'] // Emulate iPhone 12
            }
        },
        {
            name: 'Galaxy Note 9-demoqa',
            use: {
                browserName: 'webkit', // Safari engine used for iPhone
                baseURL: 'https://demoqa.com/',
                ...devices['iPhone 12'] // Emulate iPhone 12
            }
        }

    ]
}

module.exports = config;