import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
const Room = () => {
  const { roomId } = useParams();
  const myMeeting = async (e) => {
    const appId = 2090833240;
    const serverSecret = "1d7725ed674d36889cc7779d2fb15790";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Swastik Asija"
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: e,
      sharedLinks: [{
        name: 'Copy link',
        url: `http://localhost:5173/room/${roomId}`
      }
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: true,
    });
  };
  return <div>
    <div ref={myMeeting} />
  </div> ;
};

export default Room;
