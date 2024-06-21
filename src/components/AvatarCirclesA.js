import AvatarCircles from "@/components/ui/avatar-circles";
 
const avatarUrls = [
  "https://avatars.githubusercontent.com/u/16860528",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
  "https://avatars.githubusercontent.com/u/59228569",
];
 
export async function AvatarCirclesA() {
  return <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />;
}