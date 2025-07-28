import { BsChatSquareTextFill, BsPeopleFill, BsThreeDotsVertical } from "react-icons/bs";
import { IoSettingsSharp , IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { TbCircleDashed } from "react-icons/tb";
import { RiChatNewLine, RiFolderDownloadLine, RiEmojiStickerLine, RiPencilFill } from "react-icons/ri";
import { IoMdSearch, IoIosArrowDown, IoIosArrowBack} from "react-icons/io";
import { MdOutlinePushPin } from "react-icons/md";
import { FaVideo, FaLocationArrow, FaRegStar, FaRegBell, FaRegClock, FaShieldAlt } from "react-icons/fa";
import { GoPlus, GoTrash} from "react-icons/go";
import { LuCheckCheck, LuLockKeyhole, LuFileStack } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";


const ICONS = {
    Chats: BsChatSquareTextFill,
    Stories: TbCircleDashed,
    Community: BsPeopleFill,
    Channels: IoChatbubbleEllipsesSharp,
    Settings: IoSettingsSharp,
    NewChat: RiChatNewLine,
    ThreeDots: BsThreeDotsVertical,
    Search: IoMdSearch,
    Pin: MdOutlinePushPin,
    File: RiFolderDownloadLine,
    Video: FaVideo,
    ArrowDown: IoIosArrowDown,
    Plus: GoPlus,
    Sticker: RiEmojiStickerLine,
    Submit: FaLocationArrow,
    Checks: LuCheckCheck,
    Trash: GoTrash,
    ArrowBack: IoIosArrowBack,
    Pencil: RiPencilFill,
    Star: FaRegStar,
    Bell: FaRegBell,
    Clock: FaRegClock,
    Lock: LuLockKeyhole,
    Shield: FaShieldAlt,
    Files: LuFileStack,
    Profile: CgProfile
}

export default ICONS