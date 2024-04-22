import { InfinitySpin } from 'react-loader-spinner';
// import css from './ImageLoader.module.css';

export default function ImageLoader({ loading }) {
    return (
        <div >
            {loading && (
                <InfinitySpin
                    visible={true}
                    width="200"
                    color="#4fa94d"
                    ariaLabel="infinity-spin-loading"
                />
            )}
        </div>
    );
}