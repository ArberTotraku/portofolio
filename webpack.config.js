module.exports{
    resolve: {
        fallback:{process:require.resolve{"process/browser"},
     "crypto": require.resolve("crypto-browserify") ,
     "os": require.resolve("os-browserify/browser") 
        }
}