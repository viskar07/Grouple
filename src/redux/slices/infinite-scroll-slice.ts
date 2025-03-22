import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type InfiniteScrollState = {
    data: unknown[]
}

const InitialState: InfiniteScrollState = {
    data: [],
}

export const InfiniteScroll = createSlice({
    name: "InfiniteScroll",
    initialState: InitialState,
    reducers: {
        onInfiniteScroll: (
            state,
            action: PayloadAction<InfiniteScrollState>,
        ) => {
            const list = state.data.find((data: any) =>
                action.payload.data.find(
                    (payload: any) => data.id === payload.id,
                ),
            )

            if (!list) {
                state.data = [...state.data, ...action.payload.data]
            }
        },
        onclearList: (state, action) => {
            state.data = action.payload.data
        },
    },
})

export const { onInfiniteScroll, onclearList } = InfiniteScroll.actions
export default InfiniteScroll.reducer
