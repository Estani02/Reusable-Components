import { useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center gap-4'>
      <h1 className='text-[32px] font-bold'>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className='text-gray-500 text-[25px]'>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
