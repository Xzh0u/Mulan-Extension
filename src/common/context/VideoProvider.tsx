import React, { createContext, useReducer, Dispatch } from 'react';

const initialVideoContext = {
  rootRef: undefined,
  video: {
    curTime: 0,
    captions: {
      context: [] as string[],
      startTime: [] as number[],
      endTime: [] as number[],
    },
  },
  dispatch: (undefined as unknown) as Dispatch<ActionType>,
  status: { status: 'empty' } as Status,
};

const VideoContext = createContext(initialVideoContext);

const reducer = (state: VideoContextType, action: ActionType) => {
  switch (action.type) {
    default:
      return state;
  }
};

const VideoProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialVideoContext);
  return (
    <VideoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

type Status =
  | { status: 'empty' }
  | { status: 'loading' }
  | { status: 'error'; error: string }
  | { status: 'success'; data: any };

type ActionType = { type: 'test'; payload: any };

export type VideoContextType = typeof initialVideoContext;

export default VideoProvider;
