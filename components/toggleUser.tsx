import { useState, Fragment } from "react";
import { Switch } from "@headlessui/react";
import { useAppDispatch } from "@/app/lib/store/hooks";
import { togglePermission } from "@/app/lib/store/user/userSlice";

const ProfileSwitch = () => {
  const [enabled, setEnabled] = useState(false);
  const dispatch = useAppDispatch();

  const toggleProfile = () => {
    dispatch(togglePermission());
    setEnabled((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs capitalize">{enabled?"User":"Admin"}</span>

      <Switch checked={enabled} onChange={toggleProfile} as={Fragment}>
        {({ checked }) => (
          <button
            className={`${
              checked ? "bg-brand-primary" : "bg-gray-200"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span
              className={`${
                checked ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </button>
        )}
      </Switch>
    </div>
  );
};

export default ProfileSwitch;
