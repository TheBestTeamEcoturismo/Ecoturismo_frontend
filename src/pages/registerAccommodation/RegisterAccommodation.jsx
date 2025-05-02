import { useContext } from 'react';
import './RegisterAccommodation.css';
import './Step.css';
import { AccommodationsContext } from '../../providers/accommodations/AccommodationsProvider';
import { useForm } from 'react-hook-form';
import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';
import Step3 from './Step3/Step3';
import useFormStep from '../../hooks/useFormStep';
import { stepFieldsAccommodations } from '../../utils/fieldsSteps';
import Alert from '../../components/alert/Alert';
import { createAccommodation } from '../../Reducers/Accommodations/accommodations.action';

const RegisterAccommodation = () => {
  const { state, dispatch } = useContext(AccommodationsContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    setValue,
    getValues
  } = useForm();
  const { step, goToStep } = useFormStep(trigger, stepFieldsAccommodations);

  async function submit(data) {
    if (data.price <= 0) {
      <Alert message="El precio no puede ser menor a 0€" />;
    }
    await createAccommodation({ dispatch, data });
  }

  return (
    <main>
      {state.message && <Alert message={state.message} />}
      {state.error && <Alert message={state.error} />}
      <section className="register__accommodation">
        <h2>Registrar Nuevo Alojamiento</h2>
        <div className="form__container--accommodation">
          <div className="progress__bar--accommodation">
            {[1, 2, 3].map((s) => (
              <div key={s} onClick={() => goToStep(s)}>
                <p className={s === step ? 'step__active' : 'step__no--active'}>{s}</p>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit(submit)}>
            {step === 1 && <Step1 register={register} errors={errors} />}
            {step === 2 && <Step2 register={register} errors={errors} setValue={setValue} getValues={getValues} />}
            {step === 3 && <Step3 register={register} errors={errors} setValue={setValue} />}
          </form>
        </div>
      </section>
    </main>
  );
};

export default RegisterAccommodation;
