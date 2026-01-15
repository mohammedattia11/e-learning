import EnrolledCourses from "@/components/enrolled-courses";
import ExploreMore from "@/components/explore-more";
import InviteFriend from "@/components/invite-friend";
import UpgradeToPro from "@/components/upgrade-to-pro";
import UserStatus from "@/components/user-status";
import { WelcomeBanner } from "@/components/welcome-banner";

export default function DashboardPage() {
  return (
    <div className="p-10 md:px-20 lg:px-32 xl:px-48">
      <div className="grid grid-cols-3 gap-7">
        <div className="col-span-2">
          <WelcomeBanner />
          <EnrolledCourses />
          <ExploreMore />
          <InviteFriend />
        </div>
        <div>
          <UserStatus />
          <UpgradeToPro/>
        </div>
      </div>
    </div>
  );
}
