import { useState, useEffect } from 'react';
import { getUserByUsername, getuserDisplayImgs } from '../services/userServices';

export default function useUser(username) {
  const [activeUser, setActiveUser] = useState();

  useEffect(() => {
    async function getUserObjByUserId(username) {
      const user = await getUserByUsername(username);
      const { displayImg } = await getuserDisplayImgs(username);
      setActiveUser({ ...user, displayImg: displayImg } || {});
    }

    if (username) {
      getUserObjByUserId(username);
    }
  }, [username]);
  return { user: activeUser, setActiveUser };
}
