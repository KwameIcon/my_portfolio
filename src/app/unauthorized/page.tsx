


export default function UnAuthorizedPage(){
    return (
        <div className="w-screen h-screen grid grid-cols-1 place-content-center gap-2 bg-gray-200">
            <h1 className="text-2xl font-bold w-full text-center">Unauthorized Access</h1>
            <p className="w-full text-center leading-relaxed text-gray-400">Hey!, this is IKOS. Yes, you are trying to access my portfolio on a mobile device. It was design to mimic a desktop experience. Please switch to a <strong>desktop</strong> device for the best experience.</p>
        </div>
    );
}