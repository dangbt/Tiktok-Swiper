import {
  HeartIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Icons from "../Icon/icon";
// chat-bubble-oval-left-ellipsis
export default function Right() {
  return (
    <div className="absolute right-4 bottom-4 flex flex-col gap-4">
      <button>
        <div className="rounded-full w-12 ring-2 ring-white">
          <Image
            width={48}
            height={48}
            className="rounded-full"
            src="https://backend.iscore.club/storage/app/public/user_profile_image/nI0IM8mOYNVH9vzOlNsalJT9XY2CGwHC6PnsNdN1.png"
            alt="avatart"
          />
        </div>
      </button>
      <button>
        <Icons>
          <HeartIcon className="w-10 h-10 mb-1 text-white" />
          <Icons.Text className="text-white">1.1M</Icons.Text>
        </Icons>
      </button>
      <button>
        <Icons>
          <ChatBubbleOvalLeftEllipsisIcon className="w-10 h-10 mb-1 text-white" />
          <Icons.Text className="text-white">1890</Icons.Text>
        </Icons>
      </button>
      <div>
        <div className="rounded-full w-12 rotate-animation ring-4 ring-slate-700">
          <img
            className="rounded-full"
            src="https://backend.iscore.club/storage/app/public/user_profile_image/nI0IM8mOYNVH9vzOlNsalJT9XY2CGwHC6PnsNdN1.png"
            alt="avatart"
          />
        </div>
      </div>
    </div>
  );
}
