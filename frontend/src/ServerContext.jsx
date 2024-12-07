import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const ServerContext = createContext(null);

export const ServerProvider = ({ children }) => {
    const [serverInfo, setServerInfo] = useState({
        ip: '127.0.0.1',
        port: '9090'
    });

    return (
        <ServerContext.Provider value={{serverInfo, setServerInfo}}>
            {children}
        </ServerContext.Provider>
    )
};

ServerProvider.propTypes = {
    children: PropTypes.node.isRequired
};


export const useServerInfo = () => useContext(ServerContext);