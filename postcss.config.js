const tailwindcss = require('tailwindcss')

module.experts = {
    plugins:[
        tailwindcss('./tailwind.config.js'),
        require('autoprefixer')
    ]
}