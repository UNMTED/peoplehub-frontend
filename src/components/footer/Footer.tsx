function Footer() {
  const data = new Date().getFullYear();
  const logoUrl = "/logo.png";
  return (
    <div className="w-full text-white flex justify-center py-4 border-t border-[#2CA6C3]">
      <div className="container flex flex-col items-center p-1">
        <p className="text-sm font-bold">PeopleHub | Copyright: {data}</p>

        <p className="text-xs">
          &copy; Todos os direitos reservados a UNMUTED{" "}
        </p>
      </div>
    </div>
  );
}
export default Footer;
