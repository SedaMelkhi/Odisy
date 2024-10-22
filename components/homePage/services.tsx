import { ServiceType } from "@/app/page";
import { ServicesMobile } from "./servicesMobile";
import { Container } from "../shared";

export const Services = ({ services }: { services: ServiceType[] }) => {
  return (
    <section className="lg:mt-20 mt-8">
      <Container border="none" className="mt-5">
        <div className="sm:grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-2.5 gap-2 box-border overflow-hidden">
          {services &&
            services.map(({ id, title, text, image }) => (
              <div className="sm:flex hidden flex-col" key={id}>
                <div
                  className="rounded-2xl sm:pb-[100%] sm:h-auto h-[208px] group p-1 relative group sm:cursor-pointer bg-[#eee]"
                  style={{
                    background: `url(${
                      image || "not.png"
                    }) center/cover no-repeat`,
                  }}
                >
                  <div
                    className="sm:block hidden px-6 rounded-md absolute bg-white-30 backdrop-blur-[22px] bottom-1 overflow-hidden min-h-16"
                    style={{ width: "calc(100% - 8px)" }}
                  >
                    <h3 className="flex items-center min-h-16 lg:text-2xl text-xl text-white-100 font-medium leading-6 tracking-[-0.48px]">
                      {title}
                    </h3>
                    <p className="mb-[-100%] overflow-hidden group-hover:mb-0 transition-all duration-200 pb-4 leading-[18px] text-white-100">
                      {text}
                    </p>
                  </div>
                </div>
                <div className="sm:hidden block flex-auto bg-white-100 rounded-2xl p-4 mt-1">
                  <h3 className="font-medium leading-[18px] tracking-[-0.32px] mb-2">
                    {title}
                  </h3>
                  <p className="text-xs text-secondary leading-[14px]">
                    {text}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </Container>

      <div className="block sm:hidden sm:h-1 h-auto overflow-hidden pl-4">
        {services && <ServicesMobile services={services} />}
      </div>
    </section>
  );
};
