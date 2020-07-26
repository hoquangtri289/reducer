import {useEffect} from 'react'

function useDocTitle(count) {
    useEffect(() => {
        document.title = 'Title: ' + count;
    }, [count]);
}

export default useDocTitle
