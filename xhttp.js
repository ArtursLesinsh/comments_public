const xhttp = {
    /**
     * @param {*} form
     * @param {function || false} callback() - function parameters (response_object, form)
     */
    postForm: function (form, callback = false) {
        let url = form.getAttribute('action'),
            data = new FormData(form);
    
        this.post(url, data, callback);
        form.reset();
    },

    post: function (url, data, callback = false) {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            if (callback !== false) {
                let response_object = JSON.parse(this.responseText);
                if (response_object.status == true) {
                    callback(response_object);
                }
            }
        };
        xhttp.open("POST", url);
    
        xhttp.send(data);
    },

    get: function (url, callback = false) {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            if (callback !== false) {
                try {
                    let response_object = JSON.parse(this.responseText);

                    if (response_object.status == true) {
                        callback(response_object);
                    }
                } catch (e) {  
                    console.log('invalid json');  
                }
            }
        };
        xhttp.open("GET", url);
        xhttp.send();
    }
};
/*
if (callback !== false) {// проверяем. не равен ли ответ "false " и он не будет равен false, 
                            так как он будет равен функции, которая подаёт данные
try {
        let response_object = JSON.parse(this.responseText);
        if (response_object.status == true) {
            callback(response_object);
- JSON.parse(this.responseText); - делаем формат (текст) понятным для JavaScript
    }
Здесь мы пытаемся получить ответ в JSON формате, и если не получается, ошибка будет, в любой линии, то вызовается:
} catch (e) {  
    console.log('invalid json');  
}
*/