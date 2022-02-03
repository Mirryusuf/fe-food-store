import React from "react"
import { getOrders } from "../api/order";


const statusList = {
    idle: 'idle',
    process: 'process',
    success: 'success',
    error: 'error',
}

export function useOrderData() {
    let [data, setData] = React.useState([]);
    let [count, setCount] = React.useState(0);
    let [status, setStatus] = React.useState(statusList.idle);
    let [page, setPage] = React.useState(1);
    let [limit, setLimit] = React.useState(10);

    let fetchOrder = React.useCallback(async function() {
        setStatus(statusList.process)
        let {data: {data, count, error}} = await getOrders({page, limit});

        if(error){
            setStatus(statusList.error);
            return;
        }

        setStatus(statusList.success);
        setData(data);
        setCount(count);
    }, [page, limit]);

    React.useEffect(() => {
        fetchOrder();
    }, [fetchOrder]);

    return {
        data,
        count,
        status,
        page,
        limit,
        setPage,
        setLimit
    }
}