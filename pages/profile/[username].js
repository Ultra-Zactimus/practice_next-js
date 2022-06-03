import { useRouter } from 'next/router';

const Profile = () => {
  const router = useRouter();
  const {username} = router.query;
  return (
    <div>
      <h4>Hello {username}!</h4>
    </div>
  )
}

export default Profile;