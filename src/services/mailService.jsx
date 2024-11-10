import api from '../api';

const mailService = {
    sendMail: async (email) => {
        const response = await api.post('/api/mail', email, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    }
};

export default mailService;