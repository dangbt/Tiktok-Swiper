"use client";
import {
  Bars3Icon,
  RocketLaunchIcon,
  ChatBubbleBottomCenterTextIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import {
  Bars3Icon as Bars3IconSolid,
  RocketLaunchIcon as RocketLaunchIconSolid,
  ChatBubbleBottomCenterTextIcon as ChatBubbleBottomCenterTextIconSolid,
  HomeIcon as HomeIconSolid,
  UserIcon as UserIconSolid,
} from "@heroicons/react/24/solid";
import Icons from "../Icon/icon";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

enum ACTIVATED {
  HOME = "HOME",
  DISCOVER = "DISCOVER",
  INBOX = "INBOX",
  PROFILE = "PROFILE",
}

export default function Footer() {
  const [activated, setActivated] = useState<ACTIVATED>(ACTIVATED.HOME);
  const handleClick = (selected: ACTIVATED) => setActivated(selected)
  return (
    <footer className="flex items-center  bg-black justify-between px-4 py-2 ">
      <button onClick={() => handleClick(ACTIVATED.HOME)}>
        <Icons>
          {activated === ACTIVATED.HOME ? (
            <HomeIconSolid className="h-6 w-6 mb-1 text-white " />
          ) : (
            <HomeIcon className="h-6 w-6 mb-1 text-white " />
          )}
          <Icons.Text className="text-white  text-xs">Home</Icons.Text>
        </Icons>
      </button>
      <button onClick={() => handleClick(ACTIVATED.DISCOVER)}>
        <Icons>
          {activated === ACTIVATED.DISCOVER ? (
            <RocketLaunchIconSolid className="h-6 w-6 mb-1 text-white " />
          ) : (
            <RocketLaunchIcon className="h-6 w-6 mb-1 text-white " />
          )}
          <Icons.Text className="text-white  text-xs">Discover</Icons.Text>
        </Icons>
      </button>
      <button className="px-3 py-1 bg-white rounded-md">
        <Icons>
          <PlusIcon className="h-6 w-6  text-black " />
        </Icons>
      </button>
      <button onClick={() => handleClick(ACTIVATED.INBOX)}>
        <Icons>
          {activated === ACTIVATED.INBOX ? (
            <ChatBubbleBottomCenterTextIconSolid className="h-6 w-6 mb-1 text-white " />
          ) : (
            <ChatBubbleBottomCenterTextIcon className="h-6 w-6 mb-1 text-white " />
          )}
          <Icons.Text className="text-white  text-xs">Inbox</Icons.Text>
        </Icons>
      </button>
      <button onClick={() => handleClick(ACTIVATED.PROFILE)}>
        <Icons>
          {activated === ACTIVATED.PROFILE ? (
            <UserIconSolid className="h-6 w-6 mb-1 text-white " />
          ) : (
            <UserIcon className="h-6 w-6 mb-1 text-white " />
          )}
          <Icons.Text className="text-white  text-xs">Profile</Icons.Text>
        </Icons>
      </button>
    </footer>
  );
}
