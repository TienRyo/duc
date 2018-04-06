exports.registerInternShip = function (request, response) {
    let registration = new InternshipRegistration(request.user, request.internship);
    let service      = request.app.get('registration.service');

    service.send(registration).then(() => {
        // todo
    });
};

exports.confirm = function (request, response) {
    let service = request.app.get('registration.service');

    service.confirm(request.params.id).then(() => {
        // todo
    });
};