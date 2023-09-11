import axios from "axios";

const KeychainService = {

    fetchKeychainData: () => {
        return axios.get("/api/keyChains");
    }

};

export default KeychainService