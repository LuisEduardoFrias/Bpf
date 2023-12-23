import "../styles/ld_dual_ring.css";

export default function LdDualRing({show}: {show: boolean})
{
  return (
    <>
      {show && (
        <div className='modal-loading'>
          <div className='ldDualRing'></div>
        </div>
      )}
    </>
  );
}