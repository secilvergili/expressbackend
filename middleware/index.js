exports.logger = (req, res, next) => {
    console.log(
        "İstek geldi",
        "Method: ",
        req.method + " URL: " + req.url
    );

    // Arayazılımdan sonra çalışacak olan fonksiyon çalışsın
    next();
};
