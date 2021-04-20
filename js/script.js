
function initVue() {
    new Vue ({
        el: '#app',
        data:{
            emails: []
        },
        methods:{
            generateEmailsVue: function () {
                for (let i = 0; i < 10; i++) {

                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                        .then(data =>{
                            const email = data.data.response;
                            this.emails.push(email);
                        })
                        .catch(() => console.log('error'));
                }
            }
        }
    })
}


function getEmail() {

    $.ajax({
        url: "https://flynn.boolean.careers/exercises/api/random/mail",
        method: 'GET',
        success: function(data) {
            const target = $('#targetJQ');
            const res = data.response;
            target.append('<li class="email">' + res + '</li>');
        },
        error: function() {
            console.log('error');
        }
    });

};

function generateEmails(numEmails) {
    for (var i = 0; i < numEmails; i++) {
        getEmail();
    }
}

function init() {
initVue();

$('#btn').click(function () {
    generateEmails(10);
});

};


document.addEventListener('DOMContentLoaded', init);
