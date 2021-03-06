import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { asyncActionStart, asyncActionFinish, asyncActionError } from "../../async/asyncReducer";
import { dataFromSnapshot } from "../firestoreService";

export default function useFirestoreCollection({query,data, deps}) {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(asyncActionStart());
        const unsubscribe = query().onSnapshot(
            snapshot => {
                const docs = snapshot.docs.map(doc => dataFromSnapshot(doc));
                data(docs);
                dispatch(asyncActionFinish());
            },
            error => dispatch(asyncActionError(error))
        );
        return () => {
            unsubscribe()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps)
}