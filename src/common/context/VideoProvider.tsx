import React, { createContext, useReducer, Dispatch, RefObject } from 'react';

const initialVideoContext = {
  rootRef: (undefined as unknown) as RefObject<HTMLDivElement>,
  video: {
    curTime: 0,
    captions: {
      context: [],
      startTime: [],
      endTime: [],
    } as CaptionType,
  },
  dispatch: (undefined as unknown) as Dispatch<ActionType>,
  status: { status: 'empty' } as Status,
};

export const videoContext = createContext(initialVideoContext);

const reducer = (state: VideoContextType, action: ActionType) => {
  debugger;
  switch (action.type) {
    case 'setTime':
      return {
        ...state,
        video: {
          ...state.video,
          curTime: action.payload.time,
        },
      };
    default:
      return state;
  }
};

const VideoProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialVideoContext);
  return (
    <videoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </videoContext.Provider>
  );
};

type Status =
  | { status: 'empty' }
  | { status: 'loading' }
  | { status: 'error'; error: string }
  | { status: 'success'; data: any };

type ActionType =
  | { type: 'test'; payload: { test: string } }
  | { type: 'setTime'; payload: { time: number } };

export interface CaptionType {
  context: string[];
  startTime: number[];
  endTime: number[];
}

export type VideoContextType = typeof initialVideoContext;

export default VideoProvider;
