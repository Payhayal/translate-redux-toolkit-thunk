
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/actions/userActions';
import { useEffect } from 'react';

const UserPage = () => {
    const dispatch = useDispatch();
    const state = useSelector((store) => store);

    console.log(state);

  useEffect(() => {
    dispatch(getUsers());

  }, []);

  return (
    <div>
        {state.isLoading ? (
        <p>Loading</p>
        ) : (
            !state.isError && (
        <p>
            {state.users.map((user) => (
            <p key={user.id}>{user.name}</p>
            ))}
        </p>
            )
        )}

    </div>
  )
}

export default UserPage;