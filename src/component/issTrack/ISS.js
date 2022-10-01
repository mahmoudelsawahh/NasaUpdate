import Navbar from '../layout/Navbar';
import {  Annotation, Loading, Template } from './index';
import { useLoading } from './lib/loading';

function ISS() {
  const loading = useLoading();

  return (
    <>
        <Navbar/>
      <Loading visible={loading.loading} />
      <Template />
      {!loading.loading && <Annotation />}
    </>
  );
}

export default ISS;
