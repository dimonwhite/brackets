module.exports = function check(str, bracketsConfig) {
    if (str.length % 2) {
        return false;
    }

    let boolean = true,
        error;

    while (str.length > 0) {
        error = 0;
        bracketsConfig.forEach(item => {
            item = item.join('');
            let index = str.indexOf(item);
            if (index !== -1) {
                str = str.replace(item, '');
            }
            else {
                error++;
            }
        });
        if (error === bracketsConfig.length) {
            boolean = false;
            break;
        }
    }

    return boolean;
}
