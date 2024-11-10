import mailService from "../middlewares/mailService.js"

const mailController = async (req, res) => {
    try {
        const mailSubject = 'Doctor Appointment';
        mailService(req.body.email, mailSubject, req.body.content);

        return res.status(201).send({
            msg: 'Mail Send Successfully'
        });
    } catch (err) {
        return res.status(500).send({ msg: err.message });
    }
};

export default mailController;