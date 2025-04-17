import { cn } from '@/src/lib/utils';
import Image from 'next/image';
import React from 'react';

enum CallStatus {
  INACTIVE = 'INACTIVE',
  ACTIVE = 'ACTIVE',
  FINISHED = 'FINISHED',
  CONNECTING = 'CONNECTING',
}

const Agent = ({ userName }: AgentProps) => {
  // TODO: Update later
  const isSpeaking = true;
  const callStatus = CallStatus.CONNECTING;
  const messages = [
    "What's your name?",
    'My name is Wilson Tran, nice to meet you!',
  ];
  const lastMessage = messages[messages.length - 1];
  return (
    <>
      <div className="call-view">
        <div className="card-interviewer">
          <div className="avatar">
            <Image
              src="/ai-avatar.png"
              alt="vapi"
              width={65}
              height={54}
              className="object-cover"
            />
            {isSpeaking && <span className="animate-speak" />}
          </div>
          <h3>AI Agent</h3>
        </div>
        <div className="card-border">
          <div className="card-content">
            <Image
              src="/user-avatar.png"
              alt="user avatar"
              width={540}
              height={540}
              className="object-cover rounded-full size-[120px]"
            />
            <h3>{userName}</h3>
          </div>
        </div>
      </div>
      {!!messages.length && (
        <div className="transcript-border">
          <div className="transcript">
            <p
              key={lastMessage}
              className={cn(
                'transition-opacity duration-500 opacity-100 animate-fadeIn'
              )}
            >
              {lastMessage}
            </p>
          </div>
        </div>
      )}
      <div className="w-full flex justify-center">
        {callStatus !== CallStatus.ACTIVE ? (
          <button className="btn-call relative">
            <span
              className={cn(
                'absolute animate-ping rounded-full opacity-75',
                callStatus !== CallStatus.CONNECTING && 'hidden'
              )}
            />
            <span>
              {callStatus === CallStatus.INACTIVE ||
              callStatus === CallStatus.FINISHED
                ? 'Call'
                : 'Calling. . .'}
            </span>
            <span></span>
          </button>
        ) : (
          <button className="btn-disconnect">End</button>
        )}
      </div>
    </>
  );
};

export default Agent;
