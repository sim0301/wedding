import React, { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { BiTransferAlt } from "react-icons/bi";
import { FaPhone } from "react-icons/fa";
import type { Account as AccountType, WeddingData } from "../types";

interface AccountProps {
  data: WeddingData;
}

export const Account: React.FC<AccountProps> = ({ data }) => {
  const [transferModalOpen, setTransferModalOpen] = useState(false);
  const [transferAccounts, setTransferAccounts] = useState<AccountType[]>([]);
  const [transferTitle, setTransferTitle] = useState("");

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone.replace(/[^0-9+]/g, "")}`;
  };

  const handleSms = (phone: string) => {
    window.location.href = `sms:${phone.replace(/[^0-9+]/g, "")}`;
  };

  const openTransferModal = (accounts: AccountType[], title: string) => {
    setTransferAccounts(accounts);
    setTransferTitle(title);
    setTransferModalOpen(true);
  };

  const closeTransferModal = () => {
    setTransferModalOpen(false);
    setTransferAccounts([]);
    setTransferTitle("");
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("계좌번호가 복사되었습니다.");
  };

  return (
    <section id="account" className="account-section">
      <div className="account-hero">
        <h2 className="section-title">ACCOUNT</h2>
      </div>
      <p id="account-subtitle" className="section-subtitle">마음 전하실 곳</p>

      <div className="account-content">
        <div className="account-column">
          <div className="account-card">
            <p className="account-position">신랑</p>
            <div className="account-person">
              <span className="account-name">{data.groom.name}</span>
              <div className="account-actions">
                <button
                  type="button"
                  className="icon-btn"
                  onClick={() => handleCall(data.groom.phone)}
                >
                  <FaPhone />
                </button>
                <button
                  type="button"
                  className="icon-btn"
                  onClick={() => handleSms(data.groom.phone)}
                >
                  <AiOutlineMessage />
                </button>
                <button
                  type="button"
                  className="icon-btn transfer-icon-btn"
                  onClick={() => openTransferModal(data.accounts.groom, "신랑 측 계좌")}
                >
                  <BiTransferAlt />
                </button>
              </div>
            </div>
          </div>

          <div className="account-card family-card">
            <p className="family-title">신랑 측 혼주</p>
            <div className="family-person">
              <span className="family-label">아버지</span>
              <span className="family-name">{data.parents.groom.father}</span>
              <div className="account-actions">
                <button type="button" className="icon-btn disabled" disabled>
                  <FaPhone />
                </button>
                <button type="button" className="icon-btn disabled" disabled>
                  <AiOutlineMessage />
                </button>
                <button type="button" className="icon-btn transfer-icon-btn disabled" disabled>
                  <BiTransferAlt />
                </button>
              </div>
            </div>
            <div className="family-person">
              <span className="family-label">어머니</span>
              <span className="family-name">{data.parents.groom.mother}</span>
              <div className="account-actions">
                <button type="button" className="icon-btn disabled" disabled>
                  <FaPhone />
                </button>
                <button type="button" className="icon-btn disabled" disabled>
                  <AiOutlineMessage />
                </button>
                <button type="button" className="icon-btn transfer-icon-btn disabled" disabled>
                  <BiTransferAlt />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="account-column">
          <div className="account-card">
            <p className="account-position">신부</p>
            <div className="account-person">
              <span className="account-name">{data.bride.name}</span>
              <div className="account-actions">
                <button
                  type="button"
                  className="icon-btn"
                  onClick={() => handleCall(data.bride.phone)}
                >
                  <FaPhone />
                </button>
                <button
                  type="button"
                  className="icon-btn"
                  onClick={() => handleSms(data.bride.phone)}
                >
                  <AiOutlineMessage />
                </button>
                <button
                  type="button"
                  className="icon-btn transfer-icon-btn"
                  onClick={() => openTransferModal(data.accounts.bride, "신부 측 계좌")}
                >
                  <BiTransferAlt />
                </button>
              </div>
            </div>
          </div>

          <div className="account-card family-card">
            <p className="family-title">신부 측 혼주</p>
            <div className="family-person">
              <span className="family-label">아버지</span>
              <span className="family-name">{data.parents.bride.father}</span>
              <div className="account-actions">
                <button type="button" className="icon-btn disabled" disabled>
                  <FaPhone />
                </button>
                <button type="button" className="icon-btn disabled" disabled>
                  <AiOutlineMessage />
                </button>
                <button type="button" className="icon-btn transfer-icon-btn disabled" disabled>
                  <BiTransferAlt />
                </button>
              </div>
            </div>
            <div className="family-person">
              <span className="family-label">어머니</span>
              <span className="family-name">{data.parents.bride.mother}</span>
              <div className="account-actions">
                <button type="button" className="icon-btn disabled" disabled>
                  <FaPhone />
                </button>
                <button type="button" className="icon-btn disabled" disabled>
                  <AiOutlineMessage />
                </button>
                <button type="button" className="icon-btn transfer-icon-btn disabled" disabled>
                  <BiTransferAlt />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {transferModalOpen && (
        <div className="modal-overlay" onClick={closeTransferModal}>
          <div className="transfer-modal" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="modal-close" onClick={closeTransferModal}>
              ×
            </button>
            <div className="transfer-modal-header">
              <p className="section-title">{transferTitle}</p>
              <p className="transfer-modal-subtitle">계좌를 눌러서 복사해 주세요.</p>
            </div>
            <div className="transfer-modal-list">
              {transferAccounts.map((account) => (
                <div key={`${account.holder}-${account.accountNumber}`} className="transfer-modal-card">
                  <div>
                    <p className="transfer-modal-bank">{account.bank}</p>
                    <p className="transfer-modal-holder">{account.holder}</p>
                    <p className="transfer-modal-number">{account.accountNumber}</p>
                  </div>
                  <button
                    type="button"
                    className="transfer-copy-btn"
                    onClick={() => copyToClipboard(`${account.bank} ${account.accountNumber}`)}
                  >
                    복사
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
