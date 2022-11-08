import styled from "styled-components";

export const Container = styled.div`
    display : flex;
    flex-direction : column;
`

export const RowWraper = styled.div`
    display : flex;
    align-items : center;
`

export const SelectWrapper = styled.div`
    display : flex;
    align-items : center;
    margin : 1rem 0;
    > * {
        margin : auto 1rem auto 0;
    }
    > button {
        width : 160px;
    }

    > select {
        height : 50px;
        width : 200px
    }
`

export const SearchWrapper = styled.div`
    display : flex;
    align-items : center;
    margin : 1rem 0;
    > * {
        margin : auto 1rem auto 0;
    }
    > button {
        width : 160px;
    }

    > div {
        height : 50px;
        width : 200px
    }
`

export const PaginationWrapper = styled.div`
    margin: 1rem 0;
`

