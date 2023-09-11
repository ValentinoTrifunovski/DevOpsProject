import axios from "axios";

const KeyService = {

    fetchKeyData: () => {
        return axios.get("/api/keys");
    },

    deleteKey: (name) => {
        return axios.delete(`/api/keys/${name}`);
    }


};

export default KeyService