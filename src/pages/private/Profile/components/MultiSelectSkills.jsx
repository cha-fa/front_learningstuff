import { useEffect} from "react";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import { FormGroup, FormLabel, FormControl } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import useFetch from "hooks/useFetch";

const MultiSelectSkills = ( { optionSkills, updateTeacherSkills, currentUser } ) => {

  const { t } = useTranslation();
  const { data, get } = useFetch();
  const previousSkills = (data ? data.categories.map(category => category.id.toString()) : "");

  useEffect(() => {
    get(`/users/${currentUser.id}`);
  }, []);

return (
  <div className='MultiSelectSkills'>
    {previousSkills && 
          <FormGroup>
          <FormLabel>{t("profile:skills")}</FormLabel>
          <DropdownMultiselect
            handleOnChange={(e) => updateTeacherSkills(e)}
            options={optionSkills}
            selected={previousSkills}
            placeholder={t("profile:nothingSelected")}
            selectDeselectLabel={t("profile:Select/DeselectAll")}
            name="skills"
          />
        </FormGroup>
    }
  </div>
);
};
  
export default MultiSelectSkills;
