import ProfileForm from "@/components/dashboard/profile/profileForm";
import { Card } from "@/components/ui/card";

const ProfilePage = () => {
    return (
      <>
        <div className="h-full bg-gray-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-3xl">
          <ProfileForm />
        </Card>
    </div>
      </>
    )
  };
  
export default ProfilePage;