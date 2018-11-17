export const takeAppointment = async (data) => {

    const payload = Object.keys(data).map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
    }).join('&');

    const response = await fetch("https://cors-anywhere.herokuapp.com/https://italiaes.com.br/wp-admin/admin-ajax.php",
        {
            headers: {
                'Accept': 'application/json',
                "content-type":"application/x-www-form-urlencoded; charset=UTF-8"
            },
            method: "POST",
            body: payload
        })

    return await response.json();

}
